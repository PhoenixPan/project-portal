import { ParticleEffect } from 'components/particle-effect/particle-effect';
// import { ThreeObject } from 'components/home/three-object/three-object';
import Main from 'components/home/three-object/test';
import './home.scss';

export const Home = () => {
    return (
        <div>
            <div className="home-container">
                <section className="first-screen-container">
                    <ParticleEffect />
                    {/* <ThreeObject /> */}
                    <Main />
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, viverra sit amet augue sed, blandit ultrices orci. Cras interdum leo id nibh porttitor, non tristique tortor convallis. In hac habitasse platea dictumst. Sed consequat risus eget massa molestie iaculis. Quisque mattis efficitur velit. Curabitur odio dui, mattis vitae mi sed, tristique laoreet ante. Suspendisse a ornare nisi. Mauris auctor arcu dolor, at tincidunt eros pellentesque vel. Duis mattis massa ut lorem sodales, vel imperdiet tellus finibus. Etiam ultrices laoreet turpis quis lacinia. Cras tempor diam non magna dignissim facilisis. Praesent consequat lorem non augue bibendum luctus. Quisque lacinia est tellus, sit amet feugiat erat aliquam ut. Suspendisse euismod dignissim ante, id gravida augue ultricies in.</p>
                </section>
            </div>
        </div>
    );
};

export default Home;
