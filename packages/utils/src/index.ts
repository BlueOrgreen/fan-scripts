import path from 'node:path'

import fs from 'fs-extra'
import pico from 'picocolors'
import updateNotifier from 'update-notifier'
import gstring from 'gradient-string'
import consola from 'consola'
import inquirer from 'inquirer'
import envinfo from 'envinfo'
import CliTable from 'tty-table'
import { Command } from 'commander'
import { request } from 'undici'
import { glob } from 'glob'
import { execa } from 'execa'
import semver from 'semver'
import minimist from 'minimist'
import prompts from 'prompts'
import getGitRepoInfo from 'git-repo-info'
import fuzzypath from 'inquirer-fuzzy-path'
import inquirerPrompt from 'inquirer-autocomplete-prompt'
import open from 'open'
import dotenv from 'dotenv'
import { cosmiconfig } from 'cosmiconfig'
import dotenvExpand from 'dotenv-expand'
import { filesize } from 'filesize'
import recursiveReaddir from 'recursive-readdir'
import Configstore from 'configstore'
import mime from 'mime'
import ora from 'ora'
import cliProgress from 'cli-progress'
import imageSize from 'image-size'



inquirer.registerPrompt('fuzzypath', fuzzypath)
inquirer.registerPrompt('autocomplete', inquirerPrompt)

export * as filetype from 'file-type'
export * as lodash from 'lodash-es'

export {
  fs,
  pico,
  consola,
  inquirer,
  envinfo,
  CliTable,
  Command,
  request,
  glob,
  execa,
  getGitRepoInfo,
  semver,
  minimist,
  mime,
  prompts,
  open,
  dotenv,
  dotenvExpand,
  cosmiconfig,
  filesize,
  recursiveReaddir,
  Configstore,
  ora,
  cliProgress,
  imageSize,
}