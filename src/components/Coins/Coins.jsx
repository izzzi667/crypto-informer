import { getTheme, DefaultPalette,  Stack, FontSizes, FontWeights  } from "@fluentui/react";
import * as React from "react";
import { NavLink } from "react-router-dom";


const Coins = (props) =>{
    const theme = getTheme();

    const itemStyles = {
        alignItems: 'center',
        background: DefaultPalette.yellowDark,
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        width: 250,
        boxShadow: theme.effects.elevation4 
      };

      const stackStyles = {
        root: {          
          width: '100%',
        },
      };

      const numericalSpacingStackTokens = {
        childrenGap: 10,
        padding: 10,
      };

    return(
        <Stack>
          <div style={{ fontSize: FontSizes.size68, fontWeight: FontWeights.regular }}>List of coins</div>
          <Stack horizontal wrap styles={stackStyles} tokens={numericalSpacingStackTokens}>            
                {props.coins.map(c =><span key={c.id} style={itemStyles}><NavLink to={'/coin/'+c.id}> {c.name}</NavLink> </span>)}
          </Stack>
        </Stack>    
    )
}


export default Coins;
