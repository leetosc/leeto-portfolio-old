import parse, {
  domToReact,
  attributesToProps,
  HTMLReactParserOptions,
} from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import { API_URL } from '@/utils/constants';
import parameterize from 'parameterize';
import { visit } from 'unist-util-visit';
// import { normalizeVietnamese } from './utils';

type Content = {
  content: string | JSX.Element | JSX.Element[];
  headings: { text: string; id: string }[];
};

/**
 * Parse HTML string to elements with tailwind classes
 * May need to add additional cases for other components
 *
 * @param html HTML string
 * @returns React elements
 */

export const parseHtml = (html: string): Content => {
  const headings: { text: string; id: string }[] = [];

  const getHeading = (domNode: Element) => {
    let id = '';
    visit(domNode, 'tag', (node: any) => {
      if (node.name.match(/^h[1-6]$/)) {
        visit(node, 'text', (textNode: { data: string }) => {
          headings.push({
            text: textNode.data,
            id: textNode.data,
          });
          id = parameterize(textNode.data);
        });
      }
    });
    return id;
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const typedDomNode = domNode as Element;
      const props = attributesToProps(typedDomNode.attribs);

      if (typedDomNode.name === 'h1') {
        const id = getHeading(typedDomNode);
        return (
          <h1 className="mt-6 mb-3 text-4xl font-bold" id={id} {...props}>
            {domToReact(typedDomNode.children, options)}
          </h1>
        );
      }
      if (typedDomNode.name === 'h2') {
        const id = getHeading(typedDomNode);

        return (
          <h2 className="mt-6 mb-3 text-3xl font-bold" id={id} {...props}>
            {domToReact(typedDomNode.children, options)}
          </h2>
        );
      }
      if (typedDomNode.name === 'h3') {
        const id = getHeading(typedDomNode);

        return (
          <h3 className="mt-6 mb-3 text-2xl font-bold" id={id} {...props}>
            {domToReact(typedDomNode.children, options)}
          </h3>
        );
      }
      if (typedDomNode.name === 'h4') {
        const id = getHeading(typedDomNode);

        return (
          <h4 className="mt-6 mb-3 text-xl font-bold" id={id} {...props}>
            {domToReact(typedDomNode.children, options)}
          </h4>
        );
      }
      if (typedDomNode.name === 'p') {
        return (
          <p className="my-4" {...props}>
            {domToReact(typedDomNode.children, options)}
          </p>
        );
      }
      if (typedDomNode.name === 'a') {
        return <a {...props}>{domToReact(typedDomNode.children, options)}</a>;
      }
      if (typedDomNode.name === 'ul') {
        return <ul {...props}>{domToReact(typedDomNode.children, options)}</ul>;
      }
      if (typedDomNode.name === 'ol') {
        return <ol {...props}>{domToReact(typedDomNode.children, options)}</ol>;
      }
      if (typedDomNode.name === 'li') {
        return <li {...props}>{domToReact(typedDomNode.children, options)}</li>;
      }
      if (typedDomNode.name === 'img') {
        return (
          <img
            alt=""
            src={
              typedDomNode.attribs.src.startsWith('/')
                ? `${API_URL}${typedDomNode.attribs.src}`
                : typedDomNode.attribs.src
            }
          />
        );
      }
      if (typedDomNode.name === 'table') {
        return (
          <table {...props}>{domToReact(typedDomNode.children, options)}</table>
        );
      }
      if (typedDomNode.name === 'thead') {
        return <th {...props}>{domToReact(typedDomNode.children, options)}</th>;
      }
      if (typedDomNode.name === 'tbody') {
        return (
          <tbody {...props}>{domToReact(typedDomNode.children, options)}</tbody>
        );
      }
      if (typedDomNode.name === 'tr') {
        return <tr {...props}>{domToReact(typedDomNode.children, options)}</tr>;
      }
      if (typedDomNode.name === 'th') {
        return <th {...props}>{domToReact(typedDomNode.children, options)}</th>;
      }
      if (typedDomNode.name === 'td') {
        return <td {...props}>{domToReact(typedDomNode.children, options)}</td>;
      }
      if (typedDomNode.name === 'tfoot') {
        return (
          <tfoot {...props}>{domToReact(typedDomNode.children, options)}</tfoot>
        );
      }
      if (typedDomNode.name === 'caption') {
        return (
          <caption {...props}>
            {domToReact(typedDomNode.children, options)}
          </caption>
        );
      }
      if (typedDomNode.name === 'blockquote') {
        return (
          <blockquote
            className="border-l-4 border-gray-500 py-1 pr-4 pl-8"
            {...props}
          >
            {domToReact(typedDomNode.children, options)}
          </blockquote>
        );
      }
      if (typedDomNode.name === 'hr') {
        return <hr className="my-8 border-2" {...props} />;
      }
    },
  };

  return { content: parse(html, options), headings: headings };
};
