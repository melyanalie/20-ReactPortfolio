import avatar from '../assets/avatar.jpg';

function AboutMe() {
  return (
    <section>
      <img src={avatar} alt="Developer Avatar" />
      <p>Short bio about the developer...</p>
    </section>
  );
}

export default AboutMe;
