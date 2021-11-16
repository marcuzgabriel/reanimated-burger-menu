import React, { useMemo, useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import BurgerMenu from '../BurgerMenu';
import Configuration from './Configuration';

const isWeb = Platform.OS === 'web';
const HEIGHT = 250;

const H1 = styled.Text`
  font-size: 40px;
  text-align: center;
`;

const H2 = styled.Text<{ textAlign?: string }>`
  font-size: 25px;
  text-align: ${({ textAlign }): string => textAlign ?? 'center'};
`;

const Body = styled.Text`
  font-size: 18px;
  text-align: center;
  color: white;
`;

const Margin = styled.View<{
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginVertical?: number;
}>`
  ${({ marginTop, marginBottom, marginLeft, marginRight, marginVertical }): string => {
    if (marginVertical) {
      return `margin: ${marginVertical}px 0px;`;
    }

    return `
      margin-top: ${marginTop ?? 0}px;
      margin-bottom: ${marginBottom ?? 0}px;
      margin-left: ${marginLeft ?? 0}px;
      margin-right: ${marginRight ?? 0}px;
    `;
  }}
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
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.View<{ width: number }>`
  width: ${({ width }): number => width}px;
`;

export const settingTitles = ['Scale', 'Item offset', 'Color', 'Animation duration'];

const Examples: React.FC = () => {
  const [settings, setSettings] = useState({
    color: 'white',
    dimensions: 50,
    animationDuration: 500,
    itemOffset: 15,
    scale: 1,
  });

  const { width } = useWindowDimensions();

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
            dimensions={settings.dimensions}
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
            dimensions={settings.dimensions}
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
            dimensions={settings.dimensions}
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
            dimensions={settings.dimensions}
            itemOffset={settings.itemOffset}
            animationDuration={settings.animationDuration}
          />
        ),
      },
    ],
    [settings],
  );

  return (
    <ScrollView>
      <Margin marginVertical={32}>
        <Margin marginTop={32} marginRight={32} marginLeft={32}>
          <Wrapper>
            <ContentWrapper width={width * (isWeb ? 0.5 : 0.8)}>
              <H1>Morphing hamburger menu SVG's</H1>
              <Margin marginVertical={16}>
                <H2>
                  Easy customizable ham burger menus for react native and react native web based on
                  react-native-redash and react-native-reanimated
                </H2>
              </Margin>
            </ContentWrapper>
          </Wrapper>
        </Margin>
        {isWeb && <Configuration settings={settings} setSettings={setSettings} />}
        <Margin marginVertical={40}>
          <RowWrapper>
            {components.map(({ title, backgroundColor, component }, i) => (
              <BurgerMenuWrapper key={i} backgroundColor={backgroundColor}>
                <Body>{title}</Body>
                <Margin marginTop={12}>{component}</Margin>
              </BurgerMenuWrapper>
            ))}
          </RowWrapper>
        </Margin>
      </Margin>
    </ScrollView>
  );
};

export default Examples;
