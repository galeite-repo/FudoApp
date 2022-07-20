import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "1lr7wuor",
    dataset: 'production',
    apiVersion: "2022-07-16",
    useCdn: true,
    token: "skR9aiKIoUcGwmNlGg3ctfBl93pYmxPuPSGEfOT1PeUJEwAJHCWxz82FgUzTXh9BlOilRO7Cc4g9e8hI85Wg6C2zgB80jgNO4fDxmiiI5BXqShjA9slmRUrqAffJLQb4lmMkD1np46u73STcTqpMSvgvwZrjlE4wH47SG5uBJibzA7JmwtAc",

})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);