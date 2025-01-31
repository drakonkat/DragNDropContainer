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
