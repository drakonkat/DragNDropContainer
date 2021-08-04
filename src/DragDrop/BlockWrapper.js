import React from 'react'
import Container from './Container'

export default function BlockWrapper({disabledDnD,block, blockIndex, setBlocks, renderBlockWrapperStyle,renderBlockWrapperStyle2, onBlockEnd}) {
    const handleBlockWrapper = () => {
        onBlockEnd()
    }
    if (!block) return null
    if (block.type === 'container') {
        return (
            <div style={renderBlockWrapperStyle}>
                {block.content}
                <Container
                    disabledDnD={disabledDnD}
                    renderBlockWrapperStyle2={renderBlockWrapperStyle2}
                    block={block}
                    onBlockWrapper={handleBlockWrapper}
                    setBlocks={setBlocks}
                    blockIndex={blockIndex}
                />
            </div>
        )
    } else {
        return (
            <div style={renderBlockWrapperStyle2}>
                {block.content}
            </div>
        )
    }
}
