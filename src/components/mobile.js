import { TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
export const Mobile = (props) => {
    const {
      handleChange,
      isAndroidAppRequired,
      isBasicChattingRequiredM,
      isComplicatedM,
      isIPhoneAppRequired,
      isLocationBasedWorkRequired,
      isOfflineSupportRequired,
      isProperChatSolutionRequiredM,
      needLowCostSolution,
      numberOfInterfacesM,
    } = props;
    return (
        <div className="user-other-details">
             <ExpansionPanel defaultExpanded={true}>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         <Typography variant="title" gutterBottom={true}>
      Mobile
      </Typography>
        </ExpansionPanelSummary>
                <ExpansionPanelDetails className="collapse-details">
                  
                   <div>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isIPhoneAppRequired}
                onChange={handleChange}
                name="isIPhoneAppRequired"
                color="primary"
              />
            }
            label="Iphone App Required"
          />
        </FormGroup>
      </FormControl>

           <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isComplicatedM}
                onChange={handleChange}
                name="isComplicatedM"
                color="primary"
              />
            }
            label="isComplicated"
          />
        </FormGroup>
      </FormControl>

           <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isBasicChattingRequiredM}
                onChange={handleChange}
                name="isBasicChattingRequiredM"
                color="primary"
              />
            }
            label="is Basic Chatting Required"
          />
        </FormGroup>
      </FormControl>

           <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAndroidAppRequired}
                onChange={handleChange}
                name="isAndroidAppRequired"
                color="primary"
              />
            }
            label="is Android App Required"
          />
        </FormGroup>
      </FormControl>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isLocationBasedWorkRequired}
                  onChange={handleChange}
                  name="isLocationBasedWorkRequired"
                  color="primary"
                />
              }
              label="Location Based Work Required"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isOfflineSupportRequired}
                  onChange={handleChange}
                  name="isOfflineSupportRequired"
                  color="primary"
                />
              }
              label="Offline Support Required"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={needLowCostSolution}
                  onChange={handleChange}
                  name="needLowCostSolution"
                  color="primary"
                />
              }
              label="Need Low Cost Mobile Solution"
            />
          </FormGroup>
        </FormControl>
       <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isProperChatSolutionRequiredM}
                onChange={handleChange}
                name="isProperChatSolutionRequiredM"
                color="primary"
              />
            }
            label="isProperChatSolutionRequired"
          />
        </FormGroup>
      </FormControl>
 <TextField
          label="Number of Interfaces"  
          value={numberOfInterfacesM}
          onChange={handleChange}
          name="numberOfInterfacesM"
          margin="normal"
        />
      </div>
               
            </ExpansionPanelDetails>
              </ExpansionPanel>
        </div>

    )
};
export default Mobile;
