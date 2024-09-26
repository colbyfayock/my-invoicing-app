import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface InvoiceCreatedEmailProps {
  invoiceId: number;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const InvoiceCreatedEmail = ({
  invoiceId,
}: InvoiceCreatedEmailProps) => (
  <Html>
    <Head />
    <Preview>Your login code for Linear</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Invoice {invoiceId}</Heading>
        <Text style={paragraph}>
          You have a new invoice due for Space Jelly.
        </Text>
        <Section style={buttonContainer}>
          <Button style={button} href={`${baseUrl}/invoices/${invoiceId}/payment`}>
            Pay Invoice
          </Button>
        </Section>
        <Hr style={hr} />
        <Link href="https://spacejelly.dev" style={reportLink}>
          Space Jelly
        </Link>
      </Container>
    </Body>
  </Html>
);

InvoiceCreatedEmail.PreviewProps = {
  invoiceId: 1234,
} as InvoiceCreatedEmailProps;

export default InvoiceCreatedEmail;

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "1px 4px",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "21px",
  borderRadius: "4px",
  color: "#3c4149",
};
