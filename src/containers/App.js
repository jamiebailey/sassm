import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        visiblePage: state.visiblePage
    }
}

const Container = connect(mapStateToProps)(App);

export default Container;