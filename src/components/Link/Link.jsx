import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        
            <li className="ml-6 hover:bg-red-300 hover:text-white px-4 font-semibold  md:p-5 mr-6 " >
                <a href={route.path}>{route.name}</a>
            </li>
            
       
    );
};

Link.propTypes ={
    route: PropTypes.object
}

export default Link;