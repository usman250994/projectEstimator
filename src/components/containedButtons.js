import Button from '@material-ui/core/Button';
import React from 'react';
import './custom.css';



function ContainedButtons(props) {
  return (
    <div className="Aligning">
      <Button variant="contained" color="primary" type="submit" >
        Submit
      </Button>
    </div>
  );
}

export default ContainedButtons;
