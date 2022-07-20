import ChildB from './ChildB';

function ChildA({fName, lName}) {
    return(
        <>
            <h1>This is ChildA, it's parent of ChildB</h1>
            <ChildB fName={fName} lName={lName}/>
        </>
    )
}

export default ChildA;