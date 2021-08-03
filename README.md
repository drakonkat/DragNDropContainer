# DragNDropContainer

The component proupose is to merge 2 list into one. Where the order count and every object of the first list, can
contain zero or multiple element of the list 2. With a friendly drag and drop UI. So we have:

- Two list of element
- The first list can be ordered between the first list element
- The second list must be associated to one element of the first list
- If first list element contains multiple second list element. This can be ordered inside the first list element.
- If i order the first list element this must memorize the second list element contained inside the first list element

### Prop Types

| Property          | Type               | Required? | Description                                                                                                                                                                                                                                                                                               |
| :---------------- | :----------------- | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| containersArray   | Array              |           | |
| itemsArray         | Array             |           | |
| renderBlockWrapperStyle         | Style             |           | |
| renderCardStyle1         | Style             |           | |
| renderCardStyle2         | Style             |           | |
| renderContainerStyle         | Style             |           | |
| onChange         | function             |           | |

### Examples

Below is a simple `List` example. Each row in the virtualized list is rendered through the use of a `rowRenderer`
function for performance reasons. This function must return an element that has a unique `key`, applies the `style` and
has content fitting within `rowHeight`.

**Note** that it is very important that rows do not have vertical overflow. It would make scrolling the list difficult (
as individual items will intercept the scroll events). For this reason it is recommended that your rows use a style
like `overflow-y: hidden`.)

```javascript
import { DragNDropContainer } from 'drag-n-drop-container';


function App() {
    //Props Data Start
    const containersArray = [
        {
            id: 1,
            content: 'container 1',
            type: 'container',
            children: [
                {
                    content: 'item 1',
                    width: 2
                }
            ]
        },
        {
            id: 2,
            content: 'container 2',
            type: 'container',
            children: [
                {
                    content: 'item 2',
                    width: 2
                }
            ]
        },
        {
            id: 3,
            content: 'container 3',
            type: 'container',
            children: [
                {
                    content: 'item 3',
                    width: 2
                }
            ]
        }
    ]
    const itemsArray = [
        {
            id: 1,
            type: 'Item',
            children: [
                {
                    id: 4,
                    content: 'item 4',
                    width: 2,
                    type: 'text'
                },
                {
                    id: 5,
                    content: 'item 5',
                    width: 2,
                    type: 'text'
                }
            ]
        },
        {
            id: 2,
            type: 'Item',
            children: [
                {
                    id: 6,
                    content: 'item 6',
                    width: 2,
                    type: 'text'
                },
                {
                    id:7,
                    content: 'item 7',
                    width: 2,
                    type: 'text'
                }
            ]
        }
    ]
    const renderBlockWrapperStyle = {
        position: 'relative',
        background: 'white',
        padding: '20px',
        marginBottom: '10px',
        border: '1px solid lightgray',
        borderRadius: '4px',
        cursor: 'move'
    }

    const renderCardStyle1 = {
        justifyContent: 'space-around',
        backgroundColor: '#ebecf0',
        borderRadius: '3px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        position: 'relative',
        whiteSpace: 'normal',
        width: '48%',
        padding: '3%',
    }
    const renderCardStyle2 = {
        backgroundColor: '#ebecf0',
        borderRadius: '3px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        position: 'relative',
        whiteSpace: 'normal',
        width: '48%',
        padding: '4%',
    }
    const renderContainerStyle = {
        display: 'block',
        justifyContent: 'space-around'
    }

    const onChange = (containArr, itemArr) => {
        console.log(
            '*** You can see the updated containArr and item Arry when change the Drop event',
            containArr,
            itemArr
        )
    }
    //Props Data End

    return (
        <div className="App">
            <DragNDropContainer
                containersArray={containersArray}
                itemsArray={itemsArray}
                renderCardStyle1={renderCardStyle1}
                renderCardStyle2={renderCardStyle2}
                renderContainerStyle={renderContainerStyle}
                renderBlockWrapperStyle={renderBlockWrapperStyle}
                onChange={onChange}
            />
        </div>
    );
}

export default App;
```
