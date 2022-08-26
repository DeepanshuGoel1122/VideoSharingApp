import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from 'axios';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "270px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "132px" : "164px")};
  background-color: #999;
  flex: 2;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "8px"};
  gap: 12px;
  flex: 2;
`;

const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 6px 0px;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {

  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data)
    }
    fetchChannel();
  }, [video.userId])

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type}
          src={video.imgUrl} />

        <Details type={type}>
          <ChannelImage type={type}
            src={channel.img} />

          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views ● {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card;