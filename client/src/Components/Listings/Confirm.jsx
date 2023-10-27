import IconButton from "./IconButton";

const Confirm = ({ check, no }) => {
    return (
        <div>
            <IconButton click={check} icon={"fluent:checkmark-12-filled"}/>
            <IconButton click={no} icon={"octicon:x-12"} style={{"marginLeft": "5px"}}/>
        </div>
    );
}

export default Confirm;