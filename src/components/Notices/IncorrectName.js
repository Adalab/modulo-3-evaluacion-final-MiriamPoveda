function IncorrectName(props) {

    if (props.filteredFilm !== '' && props.allFilters.length === 0) {
          return (
            <div>
                <p>
                  Wow! Owen isn't familiar with the film "{props.filteredFilm}". Try another name.
                </p>
            </div>
          );
      };
}

export default IncorrectName;