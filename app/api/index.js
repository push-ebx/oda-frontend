import { unstable_noStore as noStore } from 'next/cache';

const strapi_url = process.env.strapi_url;
const mail_url = process.env.mail_url;

export async function getCarouselCards() {
  noStore();
  const query_url = strapi_url + '/api/carousel-cards?populate=*';
  console.log(query_url)
  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const {title, list, image} = item.attributes;
      const image_url = image.data.attributes.formats.medium.url;
      return { title: title, list: list.split('\n'), image: strapi_url + image_url };
    });
  } catch (error){
    console.log("error", error.message)
    return []
  }
}

export async function getCarouselButtons() {
  noStore();
  const query_url = strapi_url + '/api/carousel-buttons?populate=*';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const {text_button, icon_button} = item.attributes;
      const image_url = icon_button.data.attributes.url;
      console.log(strapi_url + image_url);
      return { text_button, icon_button: strapi_url + image_url };
    });
  } catch (error){
    console.log("error", error.message)
  }
}

export async function getUxCards() {
  noStore();
  const query_url = strapi_url + '/api/ux-cards?populate=*';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const {type, title_1, description_1, image_1, title_2, description_2, image_2} = item.attributes;
      const image_1_url = strapi_url + image_1.data[0].attributes.formats.medium.url;
      const image_2_url = image_2.data && image_2.data[0].attributes.formats.medium.url;

      return {title_1, type, description_1, image_1_url, title_2, description_2, image_2_url: strapi_url + image_2_url};
    });
  } catch (error){
    console.log("error", error.message)
  }
}

export async function getFAQ() {
  noStore();
  const query_url = strapi_url + '/api/faqs';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const { question, answer } = item.attributes;
      return { question, answer };
    });
  } catch (error){
    console.log("error", error.message)
  }
}

export async function getHomePageData() {
  noStore();
  const query_url = strapi_url + '/api/home-page?populate=*';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();
    const {presentation, footer_phone, footer_email} = data.attributes
    const presentation_url = strapi_url + presentation.data.attributes.url;

    return {presentation_url, phone: footer_phone, email: footer_email};
  } catch (error){
    console.log("error", error.message)
    return {}
  }
}

export async function sendApplication(name, phone) {
  noStore();

  const query_url = strapi_url + '/api/home-page?fields[0]=email';

  try {
    const response = await fetch(query_url);
    const {data} = await response.json();
    const {email} = data.attributes;
    await fetch(mail_url + `?email=${email}&phone=${phone}&name=${name}`);

    return 'ok';
  } catch (error){
    console.log("error", error.message)
    return {}
  }
}