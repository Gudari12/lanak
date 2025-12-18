# OpenSSH eta Fail2ban Instalazioa eta Konfigurazioa

## Helburua

Linux makina birtualean OpenSSH eta Fail2ban zerbitzuak instalatu, konfiguratu eta segurtatzea.

## 1. Zerbitzuen Aurkezpena

### OpenSSH

**Zer da?** OpenSSH (Open Secure Shell) konexio enkriptatuak egiteko tresna multzoa da.

**Erabilera praktikoa:**

- Makina baterako urrutitik konektatzea
- Fitxategiak transferitzea segurtasunez
- Komandoak exekutatzea urrunetik

### Fail2ban

**Zer da?** Saiakeren erasoak detektatu eta blokeatzen dituen segurtasun-tresna.

**Erabilera praktikoa:**

- SSH erasoak (fuerza bruta) gelditzea
- IP ostiletako sarbideak automatikoki blokeatzea
- Sistema babestea saiakera susmagarrien aurka


### Zerbitzuen arteko elkarreragina

Fail2ban-ek OpenSSH-ren logak monitorizatzen ditu. SSHra sartzeko saiakera anitz atzeman ondoren, Fail2ban-ek IP hori aldi baterako blokeatzen du.

## 2. Instalazioa eta Konfigurazioa

### 2.1 OpenSSH Instalazioa

```bash
# Sistemaren eguneratzea
sudo apt update

# OpenSSH instalatzea
sudo apt install openssh-server -y
```


### 2.2 OpenSSH Konfigurazioa

```bash
# Konfigurazio-fitxategia editatu
sudo nano /etc/ssh/sshd_config
```

Konfigurazio garrantzitsuenak:

```bash
Port 22                   # SSH ataka (defektuzkoa)
PermitRootLogin no        # Root erabiltzaile direktua ez baimentzea
PasswordAuthentication yes # Pasahitzaren bidezko autentifikazioa
MaxAuthTries 3           # Saiakera kopurua sesio bakoitzean
```


### 2.3 Fail2ban Instalazioa

```bash
# Fail2ban instalatzea
sudo apt install fail2ban -y
```


### 2.4 Fail2ban Konfigurazioa

```bash
# Konfigurazio-fitxategia sortu SSHrako
sudo nano /etc/fail2ban/jail.local
```

Edukia:

```ini
[DEFAULT]
bantime = 600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
maxretry = 3
bantime = 1800
```

## 3. Zerbitzuak Aktibatu eta Egiaztatu

### 3.1 OpenSSH Aktibatu

```bash
# OpenSSH aktibatu eta abiarazi
sudo systemctl enable ssh
sudo systemctl start ssh
sudo systemctl status ssh
```

Emaitza:

```text
● ssh.service - OpenBSD Secure Shell server
   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
   Active: active (running) since [data]
```


### 3.2 Fail2ban Aktibatu

```bash
# Fail2ban aktibatu eta abiarazi
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
sudo systemctl status fail2ban
```

Emaitza:

```text
● fail2ban.service - Fail2Ban Service
   Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor preset: enabled)
   Active: active (running) since [data]
```


### 3.3 Konexioak Egiaztatu

```bash
# SSH ataka entzuten dagoela egiaztatu
sudo netstat -tulpn | grep :22

# Fail2ban egoera ikusi
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

## 4. Proba Funtzionalak

### 4.1 SSH Konexioa Probatu

Terminal beste batean:

```bash
# Makina berean probatu
ssh localhost

# Edo IP helbidearekin
ssh root@192.168.1.X
```


### 4.2 Fail2ban Probatu

Saiakera okerrak simulatu:

```bash
# SSH konexio okerra saiatu
ssh rot@localhost

# Fail2ban egoera ikusi blokeatutako IPak
sudo fail2ban-client status sshd
```

Emaitza esperotakoa:

```text
Status for the jail: sshd
|- Filter
|  |- Currently failed: 1
|  |- Total failed:     3
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   192.168.1.X
```


### 4.3 Blokeoa Kendu

```bash
# IP bat desblokeatzeko
sudo fail2ban-client set sshd unbanip 192.168.1.X
```

## 5. Segurtasun-neurriak

### 5.1 Firewall konfigurazioa (UFW)

```bash
# UFW instalatu eta konfiguratu
sudo apt install ufw -y
sudo ufw enable
sudo ufw allow ssh
sudo ufw status
```


### 5.2 SSH Konfigurazioa Seguruagoa

```bash
sudo nano /etc/ssh/sshd_config
```

Gehitu:

```bash
Protocol 2
PermitRootLogin no
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
AllowUsers zure_erabiltzailea
```


### 5.3 Log-ak Monitorizatu

```bash
# SSH log-ak ikusi
sudo tail -f /var/log/auth.log

# Fail2ban log-ak ikusi  
sudo tail -f /var/log/fail2ban.log
```


### 5.4 Konfigurazioa Berrabiarazi

```bash
# Aldaketak aplikatu
sudo systemctl restart ssh
sudo systemctl restart fail2ban
```

## 6. Emaitzen Egiaztapena

### 6.1 Azken Egoera

```bash
# Zerbitzu guztiak exekutatzen
sudo systemctl status ssh
sudo systemctl status fail2ban

# Blokeatutako IPrik ez
sudo fail2ban-client status sshd

# SSH ataka irekita
sudo ss -tulpn | grep :22
```


### 6.2 Probak

```bash
# Konexio lokal funtzionatzen duela
ssh localhost

# Fail2ban blokeatzen duela saiakera okerrak
ssh erabiltzaile_okerra@localhost 3 aldiz
```