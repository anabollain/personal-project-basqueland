//components
import FilterByGender from './FilterByGender';
import FilterByLocation from './FilterByLocation';
import FilterByName from './FilterByName';

function Filters(props) {

    //RETURN
    return (
        <form>
            <FilterByName/>
            <FilterByLocation/>
            <FilterByGender/>
        </form>
        );
}

Filters.propTypes = {

};

export default Filters;