import { ChangeEvent, useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import DefaultLayout from "../../components/DefaultLayout";
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import Dropzone from "../../components/Form/Dropzone";
import PageTitle from "../../components/PageTitle";
import { GameFormData } from "../../utils/Types";

const GamesNew = () => {
  const [data, setData] = useState<GameFormData | null>(null);
  // const [attachments, setAttachments] = useState<File[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeAttachments = (files: File[]) => {
    // setAttachments(files);
    setData({
      ...data,
      files: files
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <DefaultLayout>
      <div className="container items-center flex flex-col gap-5 text-slate-100">
        <PageTitle title="Submit a Game" />
        <p>To request your game be added to the Epic Games store please complete the following form.</p>

        <form
          className="w-full max-w-[800px] p-3 flex flex-col gap-5"
          action=""
        >
          <Input
            type="text"
            id="email"
            name="email"
            value={data?.email}
            onChange={handleChange}
            validation="email"
            required={true}
            placeholder="Enter your email"
            labelText="Email"
            />
          <Input
            type="text"
            id="firstname"
            name="firstname"
            value={data?.firstname}
            onChange={handleChange}
            required={true}
            labelText="First Name"
            placeholder="Enter your first name"
            />
          <Input
            type="text"
            id="lastname"
            name="lastname"
            value={data?.lastname}
            onChange={handleChange}
            required={true}
            labelText="Last Name"
            placeholder="Enter your last name"
          />
          <Input
            type="text"
            id="company"
            name="company"
            value={data?.company}
            onChange={handleChange}
            required={true}
            labelText="Company"
            placeholder="Enter comapny"
            />
          <Input
            type="text"
            id="website"
            name="website"
            value={data?.website}
            onChange={handleChange}
            required={true}
            prefixText="https://"
            labelText="Comapny Website"
            placeholder="Enter your company website URL"
            />
          <Input
            type="text"
            id="title"
            name="title"
            value={data?.title}
            onChange={handleChange} 
            labelText="Game / Product Title"
            placeholder="Enter the Product Title"
            />
          <Textarea
            id="description"
            name="description"
            value={data?.description}
            onChange={handleChange}
            labelText="Game / Product Description"
            placeholder="Tell about the game in a few words"
            />
          <Input
            type="url"
            id="video"
            name="video"
            value={data?.video}
            onChange={handleChange}
            prefixText="https://"
            labelText="Video Link"
            placeholder="linkvideo.com/video4player.mp4"
            />
          <Dropzone callback={handleChangeAttachments} />
          <div>
            <PrimaryButton className="w-full py-2"
              onClick={handleSubmit}
            >
              <span className="mr-1">Submit</span>
            </PrimaryButton>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default GamesNew;