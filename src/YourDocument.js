import {  useSetDocumentId, VeltCommentTool, VeltPresence, VeltSidebarButton, VeltVideoPlayer } from '@veltdev/react';
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
          <VeltSidebarButton />
        </div>
      </div>

      <div className="box1">
        <div className="box2">
          <h2>Highlight this text to add a comment!</h2>
          <p>Or tap the comment icon and get started</p>
        </div>
      </div>
      <VeltVideoPlayer src={"https://firebasestorage.googleapis.com/v0/b/snippyly.appspot.com/o/external%2Fvelt.mp4?alt=media&token=d8af2697-c797-4610-b886-ca510b231097"} />

      <div className="box1">
        <div className="box2" id="cell-id-1">
          <h2>Highlight this text to add a comment!</h2>
          <p>Or tap the comment icon and get started</p>
          
        </div>
        <div style={{marginRight:40}}><VeltCommentTool
            targetCommentElementId="cell-id-1"
          /></div>
      </div>
    </div>
  )
}
