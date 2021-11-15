import React, { useMemo, useState } from 'react';
import styled from 'styled-components/native';
import BurgerMenu from '../BurgerMenu';
import Configuration from './Configuration';

const ROW_WRAPPER_HEIGHT = 100;
const HEIGHT = 250;

const Wrapper = styled.View`
  position: fixed;
  overflow-y: auto;
  overflow-x: hiddden;
  height: 100%;
  width: 100%;
`;

const H1 = styled.Text`
  font-size: 2em;
  text-align: center;
`;

const H2 = styled.Text<{ textAlign?: string }>`
  font-size: 1.5em;
  text-align: ${({ textAlign }): string => textAlign ?? 'center'};
`;

const Body = styled.Text`
  font-size: 1.4em;
  text-align: center;
  color: white;
`;

const Margin = styled.View<{ margin: string }>`
  margin: ${({ margin }): string => margin};
`;

const BurgerMenuWrapper = styled.View<{ backgroundColor: string }>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }): string => backgroundColor};
  flex: 1;
  height: ${HEIGHT}px;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  height: ${ROW_WRAPPER_HEIGHT}px;
`;

export const settingTitles = ['Scale', 'Item offset', 'Color', 'Animation duration'];

const Examples: React.FC = () => {
  const [settings, setSettings] = useState({
    color: 'white',
    animationDuration: 250,
    itemOffset: 15,
    scale: 0.7,
  });

  const components = useMemo(
    () => [
      {
        title: 'Elastic rotation',
        backgroundColor: '#4a148c',
        component: (
          <BurgerMenu
            type="elasticRotation"
            color={settings.color}
            scale={settings.scale}
            itemOffset={settings.itemOffset}
            animationDuration={settings.animationDuration}
          />
        ),
      },
      {
        title: 'Normal rotation',
        backgroundColor: '#43a047',
        component: (
          <BurgerMenu
            type="normalRotation"
            color={settings.color}
            scale={settings.scale}
            itemOffset={settings.itemOffset}
            animationDuration={settings.animationDuration}
          />
        ),
      },
      {
        title: 'Slider',
        backgroundColor: '#2196f3',
        component: (
          <BurgerMenu
            type="slider"
            color={settings.color}
            scale={settings.scale}
            itemOffset={settings.itemOffset}
            animationDuration={settings.animationDuration}
          />
        ),
      },
      {
        title: 'Boring',
        backgroundColor: '#000000',
        component: (
          <BurgerMenu
            type="boring"
            color={settings.color}
            scale={settings.scale}
            itemOffset={settings.itemOffset}
            animationDuration={settings.animationDuration}
          />
        ),
      },
    ],
    [settings],
  );

  return (
    <Wrapper>
      <Margin margin="32px 0px">
        <Margin margin="32px 32px 0px 32px">
          <H1>Morphing hamburger menu SVG's</H1>
          <Margin margin="16px 0px">
            <H2>
              {`Easy customizable ham burger menus for react native and react native web based on
              react-native-redash and react-native-reanimated`}
            </H2>
          </Margin>
        </Margin>
        <Configuration settings={settings} setSettings={setSettings} />
        <Margin margin="40px 0px">
          <RowWrapper>
            {components.map(({ title, backgroundColor, component }, i) => (
              <BurgerMenuWrapper key={i} backgroundColor={backgroundColor}>
                <Body>{title}</Body>
                {component}
              </BurgerMenuWrapper>
            ))}
          </RowWrapper>
        </Margin>
      </Margin>
    </Wrapper>
  );
};

export default Examples;
