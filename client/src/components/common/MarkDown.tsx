// src/components/MarkDown.tsx
import React from "react";
import MuiMarkdown, { getOverrides } from "mui-markdown";
import { Box } from "@mui/material";

interface MarkDownProps {
  children: string;
}

const MarkDown: React.FC<MarkDownProps> = ({ children }) => {
  return (
    <Box>
      <MuiMarkdown
        overrides={{
          ...getOverrides(),
          h1: {
            component: "h1",
            props: {
              style: { color: "black", fontSize: "2em", marginBottom: "0.5em" },
            } as React.HTMLProps<HTMLHeadingElement>,
          },
          h2: {
            component: "h2",
            props: {
              style: {
                color: "black",
                fontSize: "1.5em",
                marginBottom: "0.5em",
              },
            } as React.HTMLProps<HTMLHeadingElement>,
          },
          h3: {
            component: "h3",
            props: {
              style: {
                color: "black",
                fontSize: "1.17em",
                marginBottom: "0.5em",
              },
            } as React.HTMLProps<HTMLHeadingElement>,
          },
          h4: {
            component: "h4",
            props: {
              style: { color: "black", fontSize: "1em", marginBottom: "0.5em" },
            } as React.HTMLProps<HTMLHeadingElement>,
          },
          h5: {
            component: "h5",
            props: {
              style: {
                color: "black",
                fontSize: "0.83em",
                marginBottom: "0.5em",
              },
            } as React.HTMLProps<HTMLHeadingElement>,
          },
          h6: {
            component: "h6",
            props: {
              style: {
                color: "black",
                fontSize: "0.67em",
                marginBottom: "0.5em",
              },
            } as React.HTMLProps<HTMLHeadingElement>,
          },
          p: {
            component: "p",
            props: {
              style: { color: "black", marginBottom: "1em", lineHeight: "1.5" },
            } as React.HTMLProps<HTMLParagraphElement>,
          },
          ul: {
            component: "ul",
            props: {
              style: {
                color: "black",
                paddingLeft: "1.5em",
                marginBottom: "1em",
              },
            } as React.HTMLProps<HTMLUListElement>,
          },
          ol: {
            component: "ol",
            props: {
              style: {
                color: "black",
                paddingLeft: "1.5em",
                marginBottom: "1em",
              },
            } as React.HTMLProps<HTMLOListElement>,
          },
          li: {
            component: "li",
            props: {
              style: { color: "black", marginBottom: "0.5em" },
            } as React.HTMLProps<HTMLLIElement>,
          },
          blockquote: {
            component: "blockquote",
            props: {
              style: {
                color: "black",
                borderLeft: "4px solid #ddd",
                paddingLeft: "1em",
                margin: "1em 0",
              },
            } as React.HTMLProps<HTMLElement>,
          },
          code: {
            component: "code",
            props: {
              style: {
                color: "black",
                backgroundColor: "#f5f5f5",
                padding: "0.2em 0.4em",
                borderRadius: "4px",
              },
            } as React.HTMLProps<HTMLElement>,
          },
          pre: {
            component: "pre",
            props: {
              style: {
                color: "black",
                backgroundColor: "#f5f5f5",
                padding: "1em",
                borderRadius: "4px",
                overflowX: "auto",
              },
            } as React.HTMLProps<HTMLElement>,
          },
          a: {
            component: "a",
            props: {
              style: { color: "#007bff", textDecoration: "none" },
            } as React.HTMLProps<HTMLAnchorElement>,
          },
          img: {
            component: "img",
            props: {
              style: {
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              },
            } as React.HTMLProps<HTMLImageElement>,
          },
          table: {
            component: "table",
            props: {
              style: {
                borderCollapse: "collapse",
                width: "100%",
                margin: "1em 0",
              },
            } as React.HTMLProps<HTMLTableElement>,
          },
          th: {
            component: "th",
            props: {
              style: {
                color: "black",
                border: "1px solid #ddd",
                padding: "0.5em",
                textAlign: "left",
              },
            } as React.HTMLProps<HTMLTableHeaderCellElement>,
          },
          td: {
            component: "td",
            props: {
              style: {
                color: "black",
                border: "1px solid #ddd",
                padding: "0.5em",
              },
            } as React.HTMLProps<HTMLTableDataCellElement>,
          },
          thead: {
            component: "thead",
            props: {
              style: { backgroundColor: "#f9f9f9" },
            } as React.HTMLProps<HTMLElement>,
          },
          tbody: {
            component: "tbody",
            props: {
              style: { backgroundColor: "#fff" },
            } as React.HTMLProps<HTMLElement>,
          },
          tfoot: {
            component: "tfoot",
            props: {
              style: { backgroundColor: "#f9f9f9" },
            } as React.HTMLProps<HTMLElement>,
          },
          hr: {
            component: "hr",
            props: {
              style: {
                border: "0",
                borderTop: "1px solid #ddd",
                margin: "1em 0",
              },
            } as React.HTMLProps<HTMLElement>,
          },
        }}
      >
        {children}
      </MuiMarkdown>
    </Box>
  );
};

export default MarkDown;
