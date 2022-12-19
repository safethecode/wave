import { GNBLayout } from 'components/Layouts';
import { styled } from 'styles/stitches';

const Wrapper = styled('main', {
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const Main = () => {
  return (
    <GNBLayout>
      <Wrapper>
        <h1>Hello World</h1>
      </Wrapper>
    </GNBLayout>
  );
};
