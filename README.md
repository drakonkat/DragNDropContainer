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
| containersArray   | Array              |           |Data to place in the first list. That can contains 'childern' element of the second list |
| itemsArray         | Array             |           |Data to place in the second list, it can be placed in the first list container |
| renderBlockWrapperStyle         | Style             |           | |
| renderCardStyle1         | Style             |           | |
| renderCardStyle2         | Style             |           | |
| renderContainerStyle         | Style             |           | |
| onChange         | function             |           |Event fired at every change of the element in the list |
| disabledDnD         | boolean             |false           |Props to disable drag and drop function on all the component |
| renderMainContainerStyle         | style             |true           |Main style of the container of all the component |
| watchProps         | boolean             |false           |Is set to true. The component will rerender if containerArray props or itemsArray props will change |

### Examples

Here is an example of the use of the component

```javascript
import {DragNDropContainer} from 'drag-n-drop-container';


function App() {
    //Props Data Start
    const containersArray = [
        {
            id: 1,
            content: 'container 1',
            type: 'container',
            children: [
                {
                    content: 'item 1'
                }
            ]
        },
        {
            id: 2,
            content: 'container 2',
            type: 'container',
            children: [
                {
                    content: 'item 2'
                }
            ]
        },
        {
            id: 3,
            content: 'container 3',
            type: 'container',
            children: [
                {
                    content: 'item 3'
                }
            ]
        }
    ]

    let itemsArray = [
        {
            id: 4,
            content: 'item 4'
        },
        {
            id: 5,
            content: 'item 5'
        },
        {
            id: 7,
            content: 'item 7'
        }
    ]

    const renderBlockWrapperStyle = {
        position: 'relative',
        background: 'white',
        padding: '20px',
        marginBottom: '10px',
        border: '1px solid lightgray',
        borderRadius: '4px',
        cursor: 'move',
        backgroundColor: "grey"
    }
    const renderBlockWrapperStyle2 = {
        position: 'relative',
        background: 'white',
        padding: '20px',
        marginBottom: '10px',
        border: '1px solid lightgray',
        borderRadius: '4px',
        cursor: 'move',
        backgroundColor: "yellow"
    }

    const renderCardStyle1 = {
        justifyContent: 'space-around',
        backgroundColor: 'RED',
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
        backgroundColor: 'GREEN',
        borderRadius: '3px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        position: 'relative',
        whiteSpace: 'normal',
        width: '48%',
        padding: '4%'
    }
    const renderContainerStyle = {
        display: 'block',
        justifyContent: 'space-around',
        backgroundColor: "pink",
        height: "100%"

    }
    const renderMainContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between'
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
                disabledDnD={true}
                containersArray={containersArray}
                itemsArray={itemsArray}
                renderCardStyle1={renderCardStyle1}
                renderCardStyle2={renderCardStyle2}
                renderContainerStyle={renderContainerStyle}
                renderMainContainerStyle={renderMainContainerStyle}
                renderBlockWrapperStyle={renderBlockWrapperStyle}
                renderBlockWrapperStyle2={renderBlockWrapperStyle2}
                onChange={onChange}
                watchProps={true}
            />
        </div>
    );
}

export default App;
```
