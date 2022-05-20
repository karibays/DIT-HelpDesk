package com.springdemo.hellow.services;

import com.springdemo.hellow.models.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {
    private Map<String, User> users = new HashMap<>();
    private Map<String, String> tokens = new HashMap<>();
    private Map<String, String> blackListTokens = new HashMap<>();

    public String registerUser(User user) {
        if(users.containsKey(user.getEmail())){
            return "EE";
        }
        if(isUserIdExists(user)){
            return "ID";
        }
        users.put(user.getEmail(), user);
        return "OK";
    }

    public String login(User user){
        String email = user.getEmail();
        String pass = user.getPassword();
        int counterForBT = 0;
        int counterForT = 0;

        for(String key: blackListTokens.keySet()){
            String InvalidToken = blackListTokens.get(key);

            if(InvalidToken.equals(email)){
                if(users.get(InvalidToken).getPassword().equals(pass)){
                    tokens.put(key, InvalidToken);
                    blackListTokens.remove(key);
                    return key;
                }
                return "Incorrect password!";
            }
            counterForBT++;
        }
        for(String key: tokens.keySet()){
            String validToken = tokens.get(key);

            if(validToken.equals(email)){
                if(users.get(validToken).getPassword().equals(pass)){
                    return key;
                }
                return "Incorrect password!";
            }
            counterForT++;
        }
        if(counterForBT == blackListTokens.size() || counterForT == tokens.size()){
            return "Email doesn't exist!";
        }

        return "Not correct password or email!";
    }

    public User getUserById(int id){
        for(String key: users.keySet()){
            if(users.get(key).getId() == id){
                return users.get(key);
            }
        }
        return null;
    }

    public String updateUser(User user, User usersNewData, String token) {
        String newEmail = usersNewData.getEmail();
        Integer newId = usersNewData.getId();
        String newPassword = usersNewData.getPassword();

        user.setId(newId);
        user.setEmail(newEmail);
        user.setPassword(newPassword);

        tokens.remove(token);
        tokens.put(token, newEmail);
        return "User's data was successfully updated";
    }

    public String deleteUser(User userById, String token) {
        String emailOfDeleteUser = userById.getEmail();
        String emailInTokenKeys = tokens.get(token);

        if(emailOfDeleteUser.equals(emailInTokenKeys)){
            users.remove(emailOfDeleteUser);
            return "User successfully deleted.\n"+logout(token);
        }

        return "Please, enter your correct id!";
    }

    public String logout(String token){
        blackListTokens.put(token, tokens.get(token));
        tokens.remove(token);
        return "User logged out.";
    }

    public boolean isUserIdExists(User user){
        for(String u: users.keySet()){
            if(users.get(u).getId() == user.getId()){
                return true;
            }
        }
        return false;
    }

    public Map<String, User> getUsers() {
        return users;
    }

    public Map<String, String> getTokens() {
        return tokens;
    }

    public Map<String, String> getBlackListTokens() {
        return blackListTokens;
    }
}

