import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useRefAsState from '../../hooks/useRefAsState';
import MediaLink from '../../interfaces/MediaLink';
import { uploadImage } from '../../utils/image';
import BrowseAvatar from '../BrowseAvatar';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import MediaLinks from '../MediaLinks';
import classes from './index.module.scss';

interface Props {
  email: string;
  password: string;
  confirmPassword: string;
}

function CompanyForm(props: Props) {
  const [companyName, setCompanyName] = useRefAsState();
  const [phoneNumber, setPhoneNumber] = useRefAsState();
  const [country, setCountry] = useRefAsState();
  const [province, setProvince] = useRefAsState();
  const [linkedin, setLinkedin] = useRefAsState();
  const [github, setGithub] = useRefAsState();
  const [facebook, setFacebook] = useRefAsState();
  const [personalWeb, setPersonalWeb] = useRefAsState();
  const [imageFile, setImageFile] = useState<File>();
  const navigate = useNavigate();

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    let imageName = 'defaultImage.png';
    if (imageFile != null) {
      const res = await uploadImage(imageFile);
      if (res.success) {
        imageName = res.path;
      }
    }
    console.log(imageName);

    const requestBody = {
      email: props.email,
      password: props.password,
      confirmPassword: props.confirmPassword,
      companyName: companyName.current,
      phoneNumber: phoneNumber.current,
      location: {
        country: country.current,
        province: province.current,
      },
      mediaLinks: [] as MediaLink[],
      profilePicture: imageName,
    };
    if (linkedin.current)
      requestBody.mediaLinks.push({ type: '0', url: linkedin.current });
    if (github.current)
      requestBody.mediaLinks.push({ type: '1', url: github.current });
    if (facebook.current)
      requestBody.mediaLinks.push({ type: '2', url: facebook.current });
    if (personalWeb.current)
      requestBody.mediaLinks.push({ type: '3', url: personalWeb.current });
    console.log(requestBody);

    fetch(import.meta.env.VITE_BACKEND_URL + '/auth/register/company', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (res.ok) {
          return navigate('/login');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form onSubmit={onSubmit} className={classes.companyRegisterForm}>
      <BrowseAvatar setImageFile={setImageFile} />
      <div className={classes.twoColumn}>
        <FormInput
          setRef={setCompanyName}
          title="Company Name"
          required
          placeholder="Enter your company name here"
          variant="outlined"
          type="text"
        ></FormInput>
        <FormInput
          setRef={setPhoneNumber}
          title="Phone"
          required
          placeholder="Enter your phone number here"
          variant="outlined"
          type="text"
        ></FormInput>
      </div>
      <div className={classes.twoColumn}>
        <FormInput
          setRef={setCountry}
          title="Country"
          required
          placeholder="e.g. Thailand, Paris, Malaysia"
          variant="outlined"
          type="text"
        />
        <FormInput
          setRef={setProvince}
          title="Province"
          required
          placeholder="e.g. Bangkok, Nonthaburi, Saraburi"
          variant="outlined"
          type="text"
        />
      </div>
      <MediaLinks
        setLinkedin={setLinkedin}
        setGithub={setGithub}
        setFacebook={setFacebook}
        setPersonalWeb={setPersonalWeb}
      />
      <FormButton title="Sign up" />
    </form>
  );
}

export default CompanyForm;
