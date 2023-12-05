/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        pathname: '**',
      }
    ],
  },
  env: {
    strapi_url: 'http://localhost:1337',
    mail_url: 'https://mail.push-ebx.online/send'
  },
}