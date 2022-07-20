import ChildC from './ChildC';

function ChildB({fName, lName}) {
    return (
        <>
            <h1>This is ChildB, it's children is ChildC</h1>
            <ChildC fName={fName} lName={lName}/>
        </>
    )
}

export default ChildB;