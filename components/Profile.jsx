import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <div className=" w-full">
      <h1 className=" text-3xl font-bold capitalize text-center">{name}</h1>
      <p className=" text-center">{desc}</p>
      <div className="mt-16 prompt_layout">
        {data?.map((post, i) => (
          <PromptCard
            key={post?.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
