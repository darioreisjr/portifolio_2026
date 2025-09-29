import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'javascript', fileName, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const syntaxHighlight = (code: string) => {
    return code
      .replace(/(const|let|var|function|return|import|export|from|class|extends|if|else|for|while|try|catch|async|await)/g, '<span class="syntax-keyword">$1</span>')
      .replace(/(['"`])((?:(?!\1)[^\\]|\\.)*)(\1)/g, '<span class="syntax-string">$1$2$3</span>')
      .replace(/(\/\/.*$)/gm, '<span class="syntax-comment">$1</span>')
      .replace(/(\w+)(?=\s*\()/g, '<span class="syntax-function">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="syntax-variable">$1</span>');
  };

  const lines = code.split('\n');

  return (
    <div className="vscode-window">
      {fileName && (
        <div className="vscode-titlebar">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="vscode-tab active">{fileName}</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          </Button>
        </div>
      )}
      
      <div className="code-block">
        <div className="flex">
          {showLineNumbers && (
            <div className="line-numbers">
              {lines.map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
          )}
          <div className="flex-1">
            <pre className="text-sm">
              <code 
                dangerouslySetInnerHTML={{ 
                  __html: syntaxHighlight(code) 
                }}
              />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}