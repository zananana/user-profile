import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const mockup = {
    user: {
        "id": 1,
        "firstName": "Harvey",
        "lastName": "Specter",
        "likesNum": 121,
        "following": 4433,
        "followers": 723,
        "city": "New York",
        "country": "USA",
        "avatarUrl": "/avatar.png",
        "profileUser": "http://website.com/profile/HarveySpecter"
    },
    userUpdate: {
        "id": 1,
        "firstName": "Harvey",
        "lastName": "Specter",
        "likesNum": 122,
        "following": 4433,
        "followers": 723,
        "city": "New York",
        "country": "USA",
        "avatarUrl": "/avatar.png",
        "profileUser": "http://website.com/profile/HarveySpecter"
    },
    comments: [
        {
            "id": 1,
            "firstName": "Louis",
            "lastName": "Litt",
            "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
            "authorId": 1,
            "datePosed": 1545264000000,
            "authorAvatarUrl": "/avatar.png"
        },
        {
            "id": 2,
            "firstName": "Rachel",
            "lastName": "Zein",
            "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
            "authorId": 2,
            "datePosed": 1545004800000,
            "authorAvatarUrl": "/avatar.png"
        },
        {
            "id": 3,
            "firstName": "Mike",
            "lastName": "Ross",
            "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
            "authorId": 3,
            "datePosed": 1541980800000,
            "authorAvatarUrl": "/avatar.png"
        }
    ],
    addComment: {
        "id": 4,
        "firstName": "Mila",
        "lastName": "Lee",
        "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
        "authorId": 4,
        "datePosed": 1546103008000,
        "authorAvatarUrl": "/avatar.png"
    }
}