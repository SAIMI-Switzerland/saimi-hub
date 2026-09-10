// src/utils/gallery.ts
// Returns raw ImageMetadata objects — AstroWind's <Image> component
// handles all optimisation (resize, WebP conversion, hashing) internally.

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  src: ImageMetadata;   // raw Astro ImageMetadata — passed straight to <Image>
  filename: string;
}

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF,gif,GIF}',
  { eager: true }
);

function toLabel(raw: string): string {
  return raw
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const galleryPhotos: GalleryPhoto[] = Object.entries(imageModules)
  .map(([path, mod], i) => {
    const parts = path.split('/');
    const filename = parts.at(-1)!;
    const rawCategory = parts.at(-2)!;

    const category =
      rawCategory === 'gallery'
        ? 'Uncategorized'
        : toLabel(rawCategory);

    return {
      id: i + 1,
      title: toLabel(filename),
      category,
      src: mod.default,   // ImageMetadata object
      filename,
    };
  })
  .sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));