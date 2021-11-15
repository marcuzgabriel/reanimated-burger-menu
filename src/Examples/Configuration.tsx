import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components/native';

interface ConfigurationProps {
  settings: {
    color: string;
    animationDuration: number;
    itemOffset: number;
    scale: number;
  };
  setSettings: Dispatch<
    SetStateAction<{ color: string; animationDuration: number; itemOffset: number; scale: number }>
  >;
}

const H2 = styled.Text<{ textAlign?: string; fontWeight?: string }>`
  font-size: 25px;
  font-weight: ${({ fontWeight }): string => fontWeight ?? 'normal'};
  text-align: ${({ textAlign }): string => textAlign ?? 'center'};
`;

const Body = styled.Text<{ textAlign?: string; fontWeight?: string }>`
  font-size: 18px;
  font-weight: ${({ fontWeight }): string => fontWeight ?? 'normal'};
  text-align: ${({ textAlign }): string => textAlign ?? 'center'};
  color: black;
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

const ConfigurationWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ConfigurationRowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 500px;
`;

const ItemWrapper = styled.TouchableOpacity<{ isSelected?: boolean }>`
  padding: 16px;
  border: 3px solid ${({ isSelected }): string => (isSelected ? 'green' : 'transparent')};
  border-radius: 7px;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const FlexWrapper = styled.View`
  flex: 1;
`;

const configurationSettings = {
  colors: ['red', 'blue', 'white'],
  scaling: [0.5, 0.7, 1],
  itemOffset: [10, 12, 15],
  animationDurations: [250, 500, 1000],
};

const Configruation: React.FC<ConfigurationProps> = ({ settings, setSettings }) => (
  <ConfigurationWrapper>
    <Margin marginBottom={32}>
      <H2 fontWeight="bold">Simple configuration matrix for test purpose: </H2>
    </Margin>
    <ConfigurationRowWrapper>
      <FlexWrapper>
        <Body textAlign="left">Color: </Body>
      </FlexWrapper>

      {configurationSettings.colors.map(color => (
        <Margin marginRight={6}>
          <ItemWrapper
            onPress={(): void => setSettings({ ...settings, color })}
            isSelected={color === settings.color}
          >
            <Body>{color}</Body>
          </ItemWrapper>
        </Margin>
      ))}
    </ConfigurationRowWrapper>
    <Margin marginTop={6}>
      <ConfigurationRowWrapper>
        <FlexWrapper>
          <Body textAlign="left">Scales: </Body>
        </FlexWrapper>
        {configurationSettings.scaling.map(scale => (
          <Margin marginRight={6}>
            <ItemWrapper
              onPress={(): void => setSettings({ ...settings, scale })}
              isSelected={scale === settings.scale}
            >
              <Body>{scale}</Body>
            </ItemWrapper>
          </Margin>
        ))}
      </ConfigurationRowWrapper>
    </Margin>
    <Margin marginTop={6}>
      <ConfigurationRowWrapper>
        <FlexWrapper>
          <Body textAlign="left">Item offset: </Body>
        </FlexWrapper>
        {configurationSettings.itemOffset.map(offset => (
          <Margin marginRight={6}>
            <ItemWrapper
              onPress={(): void => setSettings({ ...settings, itemOffset: offset })}
              isSelected={offset === settings.itemOffset}
            >
              <Body>{offset}</Body>
            </ItemWrapper>
          </Margin>
        ))}
      </ConfigurationRowWrapper>
    </Margin>
    <Margin marginTop={6}>
      <ConfigurationRowWrapper>
        <FlexWrapper>
          <Body textAlign="left">Animation duration: </Body>
        </FlexWrapper>
        {configurationSettings.animationDurations.map(animationDuration => (
          <Margin marginRight={6}>
            <ItemWrapper
              onPress={(): void => setSettings({ ...settings, animationDuration })}
              isSelected={animationDuration === settings.animationDuration}
            >
              <Body>{animationDuration}</Body>
            </ItemWrapper>
          </Margin>
        ))}
      </ConfigurationRowWrapper>
    </Margin>
  </ConfigurationWrapper>
);

export default Configruation;
