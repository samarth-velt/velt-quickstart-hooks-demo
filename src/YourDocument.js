import {  useSetDocumentId, VeltCommentTool, VeltPresence } from '@veltdev/react';
import { useEffect, useState } from 'react';

export default function YourDocument() {

  useSetDocumentId('my-document-id')

  return (
    <div>
      <div className="toolbar">
        <div className="comment-tool">
          <VeltCommentTool />
        </div>
        <div className="presence">
          <VeltPresence />
        </div>
      </div>

      <div className="box1">
        <div className="box2">
          <h2>Highlight this text to add a comment!</h2>
          <p>Or tap the comment icon and get started</p>
        </div>
      </div>
    </div>
  )
}
