import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'app/app_module.dart';
import 'app/app_widget.dart';

void main() async {
  //wait the flutter inicialization
  WidgetsFlutterBinding.ensureInitialized();

  //wait until the shared preferences to be ready
  final sharedPreferences = await SharedPreferences.getInstance();

  //start the app
  return runApp(ModularApp(module: AppModule(sharedPreferences), child: AppWidget()));
} 