import React from 'react';
import { capitalize } from '../../utils';
//Styles
import { Wrapper } from './Home.styles';
//Types
import { Question, Activity } from '../../types/Types';

type Props = {
  heading: string;
  activities: Activity[];
  selectActivity: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const HomeScreen: React.FC<Props> = ({
  heading,
  activities,
  selectActivity,
}) => (
  <Wrapper>
    <h1>{heading}</h1>
    <ul>
      {activities &&
        activities.map((activity: Activity) => (
          <li key={activity.activity_name}>
            <a
              href={'#'}
              onClick={selectActivity}
              dangerouslySetInnerHTML={{
                __html: capitalize(activity.activity_name),
              }}
            />
          </li>
        ))}
    </ul>
  </Wrapper>
);

export default HomeScreen;
