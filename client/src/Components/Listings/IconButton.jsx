import { Icon } from '@iconify/react';

const IconButton = ({ click, icon, style }) => {
    return (
        <button onClick={click} style={style}>
            <Icon icon={icon} />
        </button>
    );
}

export default IconButton;