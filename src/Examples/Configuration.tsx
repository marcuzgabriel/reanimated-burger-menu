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
  font-size: 1.5em;
  font-weight: ${({ fontWeight }): string => fontWeight ?? 'regular'};
  text-align: ${({ textAlign }): string => textAlign ?? 'center'};
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

const Margin = styled.View<{ margin: string }>`
  margin: ${({ margin }): string => margin};
`;

const configurationSettings = {
  colors: ['red', 'blue', 'white'],
  scaling: [0.5, 0.7, 1],
  itemOffset: [10, 12, 15],
  animationDurations: [250, 500, 1000],
};

const Configruation: React.FC<ConfigurationProps> = ({ settings, setSettings }) => (
  <ConfigurationWrapper>
    <Margin margin="0px 0px 32px 0px">
      <H2 textAlign="left" fontWeight="bold">
        Simple configuration matrix for test purpose:{' '}
      </H2>
    </Margin>
    <ConfigurationRowWrapper>
      <FlexWrapper>
        <H2 textAlign="left">Color: </H2>
      </FlexWrapper>

      {configurationSettings.colors.map(color => (
        <Margin margin="0px 6px 0px 0px">
          <ItemWrapper
            onPress={(): void => setSettings({ ...settings, color })}
            isSelected={color === settings.color}
          >
            <H2>{color}</H2>
          </ItemWrapper>
        </Margin>
      ))}
    </ConfigurationRowWrapper>
    <Margin margin="6px 0px 0px 0px">
      <ConfigurationRowWrapper>
        <FlexWrapper>
          <H2 textAlign="left">Scales: </H2>
        </FlexWrapper>
        {configurationSettings.scaling.map(scale => (
          <Margin margin="0px 6px 0px 0px">
            <ItemWrapper
              onPress={(): void => setSettings({ ...settings, scale })}
              isSelected={scale === settings.scale}
            >
              <H2>{scale}</H2>
            </ItemWrapper>
          </Margin>
        ))}
      </ConfigurationRowWrapper>
    </Margin>
    <Margin margin="6px 0px 0px 0px">
      <ConfigurationRowWrapper>
        <FlexWrapper>
          <H2 textAlign="left">Item offset: </H2>
        </FlexWrapper>
        {configurationSettings.itemOffset.map(offset => (
          <Margin margin="0px 6px 0px 0px">
            <ItemWrapper
              onPress={(): void => setSettings({ ...settings, itemOffset: offset })}
              isSelected={offset === settings.itemOffset}
            >
              <H2>{offset}</H2>
            </ItemWrapper>
          </Margin>
        ))}
      </ConfigurationRowWrapper>
    </Margin>
    <Margin margin="6px 0px 0px 0px">
      <ConfigurationRowWrapper>
        <FlexWrapper>
          <H2 textAlign="left">Animation duration: </H2>
        </FlexWrapper>
        {configurationSettings.animationDurations.map(animationDuration => (
          <Margin margin="0px 6px 0px 0px">
            <ItemWrapper
              onPress={(): void => setSettings({ ...settings, animationDuration })}
              isSelected={animationDuration === settings.animationDuration}
            >
              <H2>{animationDuration}</H2>
            </ItemWrapper>
          </Margin>
        ))}
      </ConfigurationRowWrapper>
    </Margin>
  </ConfigurationWrapper>
);

export default Configruation;
