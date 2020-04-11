import { connect } from 'react-redux';
import RightMenu from '../widgets/RightMenu';

const mapStateToProps = () => {
    return {
        buttons: [
            {
                onClick: () => alert('btn'),
                icon: 'account_circle',
            },
            {
                onClick: () => alert('btn'),
                icon: 'notifications',
            },
            {
                onClick: () => alert('btn'),
                icon: 'mail',
            },
        ],
    };
};

export default connect(mapStateToProps)(RightMenu);
