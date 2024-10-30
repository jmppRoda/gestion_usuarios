package com.jmpp.gestionusuarios.utils;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class KeyGenerator {

    public static void main(String[] args) {
        // Genera una clave segura para HS256
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String encodedKey = Encoders.BASE64.encode(key.getEncoded());
        System.out.println("Clave segura generada: " + encodedKey);
    }
}
