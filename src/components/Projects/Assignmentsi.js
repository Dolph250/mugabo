import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw'; 

import Particle from "../Particle";
import './markdownStyles.css'; 

const Assignmentsi = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/mugabo/Report4.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Container fluid className="project-section">
      <div className="markdown-wrapper">
        <div className="markdown-container">
          <ReactMarkdown
            children={markdown}
            rehypePlugins={[rehypeRaw]} 
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <div className="code-block-wrapper">
                    <button
                      className="copy-btn"
                      onClick={() => navigator.clipboard.writeText(children)}
                    >
                      Copy
                    </button>
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match?.[1] || 'bash'}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="inline-code" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
      <Particle />
    </Container>
  );
};

export default Assignmentsi;
