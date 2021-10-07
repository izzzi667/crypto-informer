import  { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles, CommandBar }  from "@fluentui/react";
import React from "react";
import { useHistory } from "react-router";


const Header = () =>
{
      const stackItemStyles = {
        root: {
          padding: 5,
          width: 300
        },
      };
      const itemAlignmentsStackStyles = {
        root: {
          background: DefaultPalette.white,
          height: 50,
        },
      };
      
      const itemAlignmentsStackTokens = {
        childrenGap: 5,
        padding: 0,
      };

      const history = useHistory();

      const _items = [
        {
          key: 'Coins',
          text: 'Coins',
          iconProps: { iconName: 'Money' },
          onClick: () => {history.push('/coins');},
        },
        {
          key: 'Markets',
          text: 'Markets',
          iconProps: { iconName: 'Market' },
          onClick: () => console.log('Markets'),
        }

      ];


    return <Stack >
                <Stack horizontal disableShrink styles={itemAlignmentsStackStyles} tokens={itemAlignmentsStackTokens}>
                    <img src='https://via.placeholder.com/200x50' />
                    <Stack.Item align="center" styles={stackItemStyles}>
                      <CommandBar
                          items={_items}
                          ariaLabel="Inbox actions"

                        />
                    </Stack.Item>
                </Stack>
            </Stack>
}

export default Header;