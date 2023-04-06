import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "guisilva.070104@gmail.com",
        pass: "sfywrhohozbzfsaf",
    },
    tls: {
        rejectUnauthorized : false
    },
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { firstName, email, telefone, nomeEmpresa, segmento, funcionarios, faturamento } =
            req.body;

        // Compose email message
        const message = {
            from: "nodemailertestenext@gmail.com",
            to: "guisilva.070104@gmail.com",
            subject: "Formulário Site Next",
            html: `
        <h2>Formulário Site Next</h2>
        <p><strong>Nome:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Nome da Empresa:</strong> ${nomeEmpresa}</p>
        <p><strong>Segmento:</strong> ${segmento}</p>
        <p><strong>Funcionários:</strong> ${funcionarios}</p>
        <p><strong>Faturamento:</strong> ${faturamento}</p>
      `,
        };

        // Send email
        try {
            await transporter.sendMail(message);
            res.status(200).send("Email sent");
        } catch (error) {
            console.error(error);
            res.status(500).send("Error sending email");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}
 