import StoryblokClient from "storyblok-js-client";

// Inicjalizacja klienta Storyblok z Twoim accessToken
const Storyblok = new StoryblokClient({
  accessToken: "oqcorqzVjyMCBNGwMm5Rkgtt",
});

export const apartmentLoader = async ({ params }) => {
  const { apartmentId } = params;
  try {
    const response = await Storyblok.get(
      `cdn/stories/starobrzeska/apartments/${apartmentId}`,
      {
        version: "published",
      }
    );
    return response.data.story;
  } catch (error) {
    console.error("Failed to load data:", error);
    throw new Response("Failed to load data", { status: 500 });
  }
};
