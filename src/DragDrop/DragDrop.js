import React, {useState} from 'react'
import {ReactSortable} from 'react-sortablejs'
import BlockWrapper from './BlockWrapper'

const sortableOptions = {
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: 'ghost'
}

export default function DragDrop({
                                     disabledDnD,
                                     containersArray,
                                     itemsArray,
                                     renderCardStyle1,
                                     renderCardStyle2,
                                     renderMainContainerStyle,
                                     renderContainerStyle,
                                     renderBlockWrapperStyle,
                                     renderBlockWrapperStyle2,
                                     onChange
                                 }) {
    const [blocks, setBlocks] = useState(containersArray)
    const [items, setItems] = useState(itemsArray)

    let handleListEnd = () => {
        onChange(blocks, items)
    }
    if(disabledDnD){
        handleListEnd = () => {
        }
    }
    return (
        <div style={renderMainContainerStyle}>
            <div style={renderCardStyle1}>
                <ReactSortable
                    style={renderContainerStyle}
                    list={blocks}
                    delay={2}
                    sort={!disabledDnD}
                    onEnd={handleListEnd}
                    setList={setBlocks}
                    group={{
                        name: 's',
                        pull: false,
                        put: false
                    }}
                    {...sortableOptions}>
                    {blocks.map((block, index) => {
                        return (
                            <BlockWrapper
                                renderBlockWrapperStyle={renderBlockWrapperStyle}
                                renderBlockWrapperStyle2={renderBlockWrapperStyle2}
                                key={block.id}
                                disabledDnD={disabledDnD}
                                block={block}
                                onBlockEnd={handleListEnd}
                                blockIndex={[index]}
                                setBlocks={setBlocks}
                            />
                        )
                    })}
                </ReactSortable>
            </div>
            <div style={renderCardStyle2}>
                <ReactSortable
                    key={"sortable-0"}
                    style={renderContainerStyle}
                    group={{
                        name: 's',
                        pull: !disabledDnD,
                        put: !disabledDnD
                    }}
                    sort={!disabledDnD}
                    onEnd={handleListEnd}
                    list={items}
                    setList={(currentList) => {
                        setItems(() => {
                            return currentList
                        })
                    }}
                    {...sortableOptions}>
                    {items &&
                    items.length > 0 &&
                    items.map((childBlock, index) => {
                        return (
                            <BlockWrapper
                                renderBlockWrapperStyle={renderBlockWrapperStyle}
                                renderBlockWrapperStyle2={renderBlockWrapperStyle2}
                                key={index}
                                block={childBlock}
                                blockIndex={[index]}
                                setBlocks={setItems}
                            />
                        )
                    })}
                </ReactSortable>
            </div>
        </div>
    )
}
