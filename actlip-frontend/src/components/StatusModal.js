import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { createPost, updatePost } from "../redux/actions/postAction";
import { imageShow, videoShow } from "../utils/mediaShow";

function StatusModal() {
  const { auth, status, socket } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [head, setHead] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [stream, setStream] = useState(false);
  const refCanvas = useRef();
  const [tracks, setTracks] = useState("");
  const videoRef = useRef();

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];

    files.forEach((file) => {
      if (!file) return (err = "File does not exist.");

      if (file.type > 1024 * 1024 * 5) {
        return (err = "File cannot be more than 5mb");
      }

      return newImages.push(file);
    });

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setImages([...images, ...newImages]);
  };

  const deleteImages = (index) => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleStopStream = () => {
    tracks.stop();
    setStream(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length === 0)
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: "Please add a photo." },
      });

    if (status.onEdit) {
      dispatch(updatePost({ head, content, images, auth, status }));
    } else {
      dispatch(createPost({ head, content, images, auth, socket }));
    }

    setHead("");
    setContent("");
    setImages([]);
    if (tracks) tracks.stop();
    dispatch({ type: GLOBALTYPES.STATUS, payload: false });
  };

  useEffect(() => {
    if (status.onEdit) {
      setHead(status.head);
      setContent(status.content);
      setImages(status.images);
    }
  }, [status]);

  return (
    <div className="status_modal pb-[50px] pt-[100px] lg:pt-0 z-40">
      <form onSubmit={handleSubmit}>
        <div className="status_header">
          <h5 className="m-0 font-semibold">Create Post</h5>
          <span
            onClick={() =>
              dispatch({ type: GLOBALTYPES.STATUS, payload: false })
            }
          >
            &times;
          </span>
        </div>

        <div className="status_body">
          <textarea
            name="head"
            value={head}
            placeholder={` Input News head`}
            onChange={(e) => setHead(e.target.value)}
          />
          <textarea
            name="content"
            value={content}
            placeholder={` Input News content`}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="show_images  ">
            {images?.map((img, index) => {
              return (
                <div key={index} id="file_img">
                  {img.camera ? (
                    imageShow(img.camera)
                  ) : img.url ? (
                    <>
                      {img.url.match(/video/i)
                        ? videoShow(img.url)
                        : imageShow(img.url)}
                    </>
                  ) : (
                    <>
                      {img.type.match(/video/i)
                        ? videoShow(URL.createObjectURL(img))
                        : imageShow(URL.createObjectURL(img))}
                    </>
                  )}
                  <span onClick={() => deleteImages(index)}>&times;</span>
                </div>
              );
            })}
          </div>

          {stream && (
            <div className="stream relative">
              <video autoPlay muted ref={videoRef} width="100%" height="100%" />
              <span onClick={handleStopStream}>&times;</span>
              <canvas ref={refCanvas} style={{ display: "none" }} />
            </div>
          )}

          <div className="input_images">
            <div className="file_upload">
              <span className="material-icons text-[30px]">collections</span>
              <input
                type="file"
                name="file"
                id="file"
                multiple
                accept="image/*,video/*"
                onChange={handleChangeImages}
              />
            </div>
          </div>
        </div>

        <div className="status_footer">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white w-full p-[5px] rounded-[5px]"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default StatusModal;
