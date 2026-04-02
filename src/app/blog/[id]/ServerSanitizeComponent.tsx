"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  content: string;
};

export function ServerSanitizeComponent({ content }: Props) {
  const sanitizedContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "a",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "em",
      "strong",
      "del",
      "img",
      "br",
      "hr",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "div",
      "span",
    ],
    ALLOWED_ATTR: [
      "href",
      "src",
      "alt",
      "title",
      "class",
      "id",
      "target",
      "rel",
      "style",
      "width",
      "height",
      "data-language",
    ],
    ADD_ATTR: ["target"],
    ALLOW_UNKNOWN_PROTOCOLS: false,
  });

  return (
    <div
      id="blog-content"
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
