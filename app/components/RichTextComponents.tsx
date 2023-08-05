'use client'

{/*
'use client'
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../sanity/lib/urlFor'

export const RichTextComponents = {
    types: {
      image: ({ value }: any) => {
        return (
          <div className="relative w-full h-96 m-10 mx-auto">
            <Image
              className="object-contain"
              src={urlFor(value).url()}
              alt="Blog Post Image"
              fill
            />
          </div>
        );
      },
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="mt-lg list-decimal">{children}</ol>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-5xl py-10 font-bold">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-4xl py-10 font-bold">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-3xl py-10 font-bold">{children}</h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-2xl py-10 font-bold">{children}</h4>
      ),
  
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-[#8F00FF] border-l-4 pl-5 py-5 my-5">
          {children}
        </blockquote>
      ),
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
    
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noopener noreferrer"
          : undefined;
  
        return (
          <Link
            href={value.href}
            rel={rel}
            className="underline decoreration-[#8F00FF] hover:decoration-black"
          >
            {children}
          </Link>
        );
      },
    },
  };
  export default RichTextComponents;
*/}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../sanity/lib/urlFor';
import ShareLinks from './elements/ShareLinks'; // Import ShareLinks component
import SocialLink from './elements/socialLink'; // Import SocialLink component

interface ShareLinksProps {
  url: string; // Define the url prop
}

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#8F00FF] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoreration-[#8F00FF] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
    // Add the social share links here
    sharelinks: ({ value }: any) => (
      <ShareLinks url={value.url} />
    ),
    // Add the social media profile links here
    sociallinks: ({ value }: any) => (
      <SocialLink href={value.href} platform={value.platform} />
    ),
  },
};

export default RichTextComponents;
